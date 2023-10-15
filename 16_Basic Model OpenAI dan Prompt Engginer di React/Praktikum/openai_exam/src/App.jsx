import { useState } from 'react'
import { OpenAIAPI, Configuration } from 'openai'

const apikey = "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"
const configuration = new Configutation({apikey});
const openai = new OpenAIAPI(configutation);

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0.5,
      max_tokens: 500,
    })

    setOutput(response.data.choices[0].text)
  }

  return (
    <div className="bg-gray-500 text-gray-100 h-screen flex flex-col dark:bg-gray-400 dark:text-gray-50">
      <div className="flex-1 overflow-y-scroll">
        <div className="flex justify-end mt-2 mr-2">
          <div className="bg-green-500 rounded-lg px-4 py-2 text-black max-w-sm">
            Hi Human, how can I help you?
          </div>
        </div>
        <div className="flex-justify-start mt-2 ml-2">
          <div className="bg-gray-300 rounded-lg px-4 py-2 text-black max-w-sm">
           Hi Openai, can you give me some information about Resistor? 
          </div>
        </div>
        {
          output ?(
            <div className="flex justify-end mt-2 mr-2">
          <div className="bg-green-500 rounded-lg px-4 py-2 text-black max-w-sm">
            {output}
          </div>
          </div>
          ) : null
        }
      </div>
      <form onSubmit={handleSubmit}>
        <div className= "flex items-center">
          <input type="text" className="w-full border rounded-lg py-2 px-4 dark:bg-gray-600 dark:text-gray-200" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message"/>
          <button type="submit" className="bg-red-300 hover:bg-red-400 rounded-lg px-4 py-2 text-white ml-2">Send</button>

        </div>
      </form>
    </div>
  )
}

export default App
