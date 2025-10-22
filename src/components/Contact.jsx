export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        I’m currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
      </p>
      <a
        href="https://www.linkedin.com/in/inderjeetsingh01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="px-8 py-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
      >
        Linked in
      </a>
      <div className="flex flex-col items-center justify-center mt-16 gap-10">
      <p  className="text-gray-400">email: ij653588@gmail.com</p>
      <p className="text-gray-400">PH: 7717609898</p>
      </div>
      <p className="text-gray-600 mt-16">© 2025 Inder. All Rights Reserved.</p>
    </section>
  );
}
