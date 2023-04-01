import { SiGmail, SiLinkedin, SiDiscord, SiGithub } from "react-icons/si";

function CardContact() {
  return (
    <>
      <a href="mailto:joaquinaestruch@gmail.com" target="_blank">
        <div
          className="Contact"
          style={{
            background: "#fff linear-gradient(to right, #e73e3e, #de464f)",
            boxShadow:
              "0px 4px 15px 0px rgba(231,62,62,1), 0px 6px 20px 0px rgba(222,70,79,0.5)",
          }}
        >
          <SiGmail />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/joaquin-estruch-4b645626a/"
        target="_blank"
      >
        <div
          className="Contact"
          style={{
            backgroundImage: "linear-gradient(to right, #1c7bf0, #1E40AF)",
            boxShadow:
              "0px 4px 15px 0px rgba(28, 123, 240, 0.3), 0px 6px 20px 0px rgba(30, 64, 175, 0.3)",
          }}
        >
          <SiLinkedin />
        </div>
      </a>

      <a href="https://discord.gg/GbZZ4JQ9rH" target="_blank">
        <div
          className="Contact"
          style={{
            background: "#fff linear-gradient(to right, #425064, #586a83)",
            boxShadow:
              "0px 4px 15px 0px rgba(66,80,100,1), 0px 6px 20px 0px rgba(88,106,131,0.5)",
          }}
        >
          <SiDiscord />
        </div>
      </a>

      <a href="https://github.com/joacoetruuu" target="_blank">
        <div
          className="Contact"
          style={{
            background: "#fff linear-gradient(to right, #2c2f33, #3c3d3e)",
            boxShadow:
              "0px 4px 15px 0px rgba(44,47,51,1), 0px 6px 20px 0px rgba(60,61,62,0.5)",
          }}
        >
          <SiGithub />
        </div>
      </a>
    </>
  );
}

export default CardContact;
