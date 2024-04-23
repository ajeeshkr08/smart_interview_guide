import os
from openai import OpenAI
import re
os.environ["OPENAI_API_KEY"] = "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"
client = OpenAI()
chat_log = []
def start_streaming():
    response= ""
    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=chat_log,
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            # print(chunk.choices[0].delta.content, end="")
            response = response + " " + chunk.choices[0].delta.content
    text_content, code_content = extract_text_and_code(response)
    # print(text_content,type(code_content),code_content)
    if text_content != '':
        chat_log.append({"role": "assistant", "content": text_content})
        return chat_log,code_content
    else:
        chat_log.append({"role": "assistant", "content": response})
        return chat_log,[]



def extract_text_and_code(response):
    # Match text content
    text_content = re.search(r'^.*?(?=```)', response, re.DOTALL)
    text_content = text_content.group(0).strip() if text_content else ""

    # Match code content
    code_content = re.findall(r'```(?:.*?)```', response, re.DOTALL)
    code_content = [code.strip('`') for code in code_content]

    return text_content, code_content

            
# while True:
#     user_input = input("Ask Something:")
#     if user_input == "quit":
#         break
#     else:
#         chat_log.append({"role": "user", "content": user_input})
#         start_streaming()


# if __name__ == "__main__":
#     start_streaming()