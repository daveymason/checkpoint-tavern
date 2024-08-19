from flask import Flask, request, jsonify, Response
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)

# Initialize the OpenAI client with your API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/chat', methods=['GET'])
def chat():
    user_input = request.args.get('message')
    if not user_input:
        return jsonify({'error': 'No message provided'}), 400

    def generate():
        try:
            stream = openai.chat.completions.create(
                model="gpt-4o-mini",
                messages=[{"role": "user", "content": user_input}],
                stream=True,
            )

            for chunk in stream:
                if chunk.choices[0].delta and chunk.choices[0].delta.content is not None:
                    yield f"data: {chunk.choices[0].delta.content}\n\n"
        
        except Exception as e:
            app.logger.error(f"An error occurred: {str(e)}")
            yield f"data: Error: {str(e)}\n\n"

    return Response(generate(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)
