from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)

# Initialize the OpenAI client with your API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    history = data.get('history', [])

    if user_message:
        # Prepare the conversation with roles
        conversation = history + [{"role": "user", "content": user_message}]

        def stream_response():
            stream = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=conversation,
                stream=True
            )
            for chunk in stream:
                if chunk.choices[0].delta.get("content"):
                    yield f"data: {chunk.choices[0].delta.content}\n\n"

        return Response(stream_response(), content_type='text/event-stream')

    else:
        return jsonify({"error": "No message provided"}), 400

if __name__ == '__main__':
    app.run(debug=True)
