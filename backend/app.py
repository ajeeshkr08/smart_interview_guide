from flask import Flask, request , jsonify
from flask_cors import CORS
import agent


app = Flask(__name__)
CORS(app)
history =[]
code_content =[]
@app.route('/api',methods = ['GET','POST'])
def test():
    data = {"msg":"response...."}
    print("test")
    print(data)
    data2 = request.json
    print(data2)
    agent.chat_log.append({"role": "user", "content": data2['message']})
    history,code_content= agent.start_streaming()
    print(data2['message'])
    print(agent.chat_log)
    print("history",history)
    print("code....",code_content)
    return jsonify(history,code_content)

if __name__ == "__main__":
    app.run(debug=True,host='localhost', port=5000)