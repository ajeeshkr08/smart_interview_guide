from openai import OpenAI

client = OpenAI("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")

stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Say this is a test"}],
    stream=True,
)
for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")