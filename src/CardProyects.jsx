import { Image, Divider, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

function CardProyects({ variable }) {
  const dataProjects = [
    {
      image:
        "https://i.ibb.co/Mnfmf9S/sneakerscrapper-vercel-app-Sneaker-Scrapper.png",
      title: "Sneaker Scrapper",
      description:
        "Es una página web que te permite buscar diferentes modelos de zapatillas en múltiples sitios web al mismo tiempo. Así, podrás encontrar la mejor opción y precio sin tener que abrir varias pestañas en tu navegador.",
      links: [
        "https://github.com/Joacoetruuu/client-sneaker-scrapper",
        "https://sneakerscrapper.vercel.app/",
      ],
    },
    {
      image: "https://i.ibb.co/tc0SHBs/binance-p2p-netlify-app-P2-PBinance.png",
      title: "Binance P2P",
      description:
        "Binance P2P es una página que muestra las solicitudes de compra y venta en todas las monedas disponibles en Binance, utilizando una API externa.",
      links: [
        "https://github.com/Joacoetruuu/binance-p2p",
        "https://binance-p2p.netlify.app/",
      ],
    },
    {
      image:
        "https://i.ibb.co/hVTXgYh/localhost-5173-Si-Me-Sobrarael-Tiempo-Duki.png",
      title: "CloneFy",
      description:
        "Es una página web clon de Spotify hecha con React que utiliza la Web API de Spotify para controlar la reproducción de música, permitiendo a los usuarios acceder a su biblioteca musical",
      links: ["", "https://github.com/Joacoetruuu/CloneFy"],
    },
    {
      image: "https://i.ibb.co/K2Xh48y/image.png",
      title: "Dolar Blue",
      description:
        "Dolar Blue es una extensión de Firefox que te muestra la cotización actualizada del dólar oficial, blue y cripto en Argentina.",
      links: [
        "https://github.com/Joacoetruuu/extension-google-cotizacion-dolar",
        "https://addons.mozilla.org/es/firefox/addon/dolar-blue/",
      ],
    },
  ];
  useState(() => {
    console.log(variable);
  }, [variable]);
  return (
    <>
      <div className="cardProyect" id="grid-item active">
        <a href={dataProjects[variable].links[1]} target="_blank">
          <Image src={dataProjects[variable].image}></Image>
        </a>
        <Divider />
        <Text
          bgGradient="linear(to-l, #036ca4, #0da2e5)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          {dataProjects[variable].title}
        </Text>
        <Text color={"white"}> {dataProjects[variable].description}</Text>

        <a href={dataProjects[variable].links[0]} target="_blank">
          <button>
            <AiFillGithub
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>

        <a href={dataProjects[variable].links[1]} target="_blank">
          <button>
            <AiFillChrome
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>
      </div>

      <div className="cardProyect" id="grid-item">
        <a href="https://binance-p2p.netlify.app/" target="_blank">
          <Image src="https://i.ibb.co/tc0SHBs/binance-p2p-netlify-app-P2-PBinance.png"></Image>
        </a>
        <Divider />
        <Text
          bgGradient="linear(to-l, #036ca4, #0da2e5)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          Binance P2P
        </Text>
        <Text color={"white"}>
          {" "}
          Binance P2P es una página que muestra las solicitudes de compra y
          venta en todas las monedas disponibles en Binance, utilizando una API
          externa.
        </Text>
        <a href="https://github.com/Joacoetruuu/binance-p2p" target="_blank">
          <button>
            <AiFillGithub
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>

        <a href="https://binance-p2p.netlify.app/" target="_blank">
          <button>
            <AiFillChrome
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>
      </div>

      <div className="cardProyect" id="grid-item">
        <a
          href="https://clone-fy.vercel.app/"
          target="_blank"
        >
          <Image src="https://i.ibb.co/hVTXgYh/localhost-5173-Si-Me-Sobrarael-Tiempo-Duki.png"></Image>
        </a>
        <Divider />
        <Text
          bgGradient="linear(to-l, #036ca4, #0da2e5)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          CloneFy
        </Text>
        <Text color={"white"}>
          {" "}
          Es una página web clon de Spotify hecha con React que utiliza la Web
          API de Spotify para controlar la reproducción de música, permitiendo a
          los usuarios acceder a su biblioteca musical.{" "}
        </Text>

        <a href="https://github.com/Joacoetruuu/CloneFy" target="_blank">
        <button>
          <AiFillGithub
            style={{
              color: "white",
              height: "25px",
              width: "25px",
              margin: "10px",
            }}
          />
        </button>
        </a>
        <a
          href="https://clone-fy.vercel.app/"
          target="_blank"
        >
          <button>
            <AiFillChrome
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>
      </div>

      <div className="cardProyect" id="grid-item">
        <a
          href="https://addons.mozilla.org/es/firefox/addon/dolar-blue/"
          target="_blank"
        >
          <Image src="https://i.ibb.co/K2Xh48y/image.png"></Image>
        </a>
        <Divider />
        <Text
          bgGradient="linear(to-l, #036ca4, #0da2e5)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
        >
          Dolar Blue
        </Text>
        <Text color={"white"}>
          {" "}
          "Dolar Blue" es una extensión de Firefox que te muestra la cotización
          actualizada del dólar oficial, blue y cripto en Argentina.{" "}
        </Text>
        <a
          href="https://github.com/Joacoetruuu/extension-google-cotizacion-dolar"
          target="_blank"
        >
          <button>
            <AiFillGithub
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>

        <a
          href="https://addons.mozilla.org/es/firefox/addon/dolar-blue/"
          target="_blank"
        >
          <button>
            <AiFillChrome
              style={{
                color: "white",
                height: "25px",
                width: "25px",
                margin: "10px",
              }}
            />
          </button>
        </a>
      </div>
    </>
  );
}

export default CardProyects;
