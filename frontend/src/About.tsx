//TODO - Add hyperlinks to text
//TODO - Styling

export default function About() {
  return (
    <div className="mx-5 grid min-h-screen md:mx-36">
      <article className=" place-items-left mx-auto my-auto flex w-full max-w-6xl flex-col gap-6 rounded-lg bg-gray-100 p-6 pt-14 pb-14 text-jet lg:p-10 xl:p-16">
        <div className="flex items-center">
          <p className="mr-2 text-3xl">About VerveGPT</p>
          <p className="text-[21px]">🦖</p>
          <p className="mt-4 ml-2">
          Steps to Set Up VerveGPT on Your Device

To get VerveGPT running on your device, you need to download and install the VerveGPT software, which is available for Windows, MacOS, and Ubuntu platforms. Once you've installed the software, the next step is to create a configuration file. This file outlines where your data is located and sets the parameters for VerveGPT. Once the configuration file is set up, you're ready to launch VerveGPT.
            </p>
        </div>
        <div>
          <p>
            If you want to add your own documentation, please follow the
            instruction below:
          </p>
          <p className="mt-4 ml-2">
            1. Navigate to{' '}
            <span className="bg-gray-200 italic"> /application</span> folder
          </p>
          <p className="mt-4 ml-2">
            2. Install dependencies from{' '}
            <span className="bg-gray-200 italic">
              pip install -r requirements.txt
            </span>
          </p>
          <p className="mt-4 ml-2">
            3. Prepare a <span className="bg-gray-200 italic">.env</span> file.
            Copy <span className="bg-gray-200 italic">.env_sample</span> and
            create <span className="bg-gray-200 italic">.env</span> with your
            OpenAI API token
          </p>
          <p className="mt-4 ml-2">
            4. Run the app with{' '}
            <span className="bg-gray-200 italic">python app.py</span>
          </p>
          <p className="mt-4 ml-2">
          VerveGPT is a user-friendly, privacy-focused chatbot that runs locally on your device. This advanced AI tool can be utilized for a myriad of tasks, including answering queries about the world, composing emails, crafting documents, creating imaginative stories, poems, songs, and plays, as well as comprehending and summarizing documents. VerveGPT can be installed on Windows, MacOS, and Ubuntu systems.
            
          </p>
          <p className="mt-4 ml-2">
          Benefits of Hosting VerveGPT On Your Own Device

Running VerveGPT on your own device brings several benefits, especially to those who value privacy and control. Here are some key advantages:

Data Security: When VerveGPT operates directly on your device, your data stays local and doesn't venture into the cloud. This ensures enhanced protection against unauthorized access, as your data stays with you.

Compliance: If your operations require adherence to specific regulations like HIPAA or GDPR, having VerveGPT on your device can make meeting these compliance requirements simpler and more straightforward.

Control: Hosting VerveGPT locally gives you more control over its usage, allowing you to tailor its functions according to your specific needs or business requirements.

          </p>

          <p className="mt-4 ml-2">
          Conclusion

Hosting VerveGPT on your own device can provide several advantages, including enhanced data security, improved compliance, and greater control. If you're contemplating the use of VerveGPT, consider running it locally on your device for a more secure and customizable experience.

Additional Information

Beyond the benefits already mentioned, hosting VerveGPT on your own device can also provide the following advantages:

Performance: When VerveGPT runs locally, it can process large amounts of data more quickly. This can be particularly beneficial for businesses that handle large volumes of data, like those in the healthcare or financial sectors.

Cost savings: Hosting VerveGPT on your own device can reduce costs associated with cloud computing, as you won't need to pay for cloud storage or bandwidth.

For more information on setting up VerveGPT on your own device, you can visit the VerveGPT website.
          </p>
        </div>
      </article>
    </div>
  );
}
