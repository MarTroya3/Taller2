import DefaultLayout from "@/layouts/default";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

export default function IndexPage() {
  const serviciodata = [
    {
      id: 1,
      color: "#1B6F0E",
      name: "Informes de Cumplimiento Amniental",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      color: "#c22702",
      name: "Informes de Gestión Anual",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 3,
      color: "#2986cc",
      name: "Revisar auditorias ambientales",
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
  ];
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center space-y-8 mt-8">
        <h1 className="text-4xl font-bold text-center">
          ¡Bienvenido a Grupo Acosta!
        </h1>
        <p className="text-lg text-center">
          Ingresa usuario y contraseña
        </p>

        <h2 className="text-2xl font-bold">Usuario</h2>
        <div>
         <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
        />          
        </div>
        <h2 className="text-2xl font-bold">Contraseña</h2>
        <div>
          <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
          </div>
        <Link href="/servicios">
          <Button color="warning" size="lg">
            Ingresar
          </Button>
        </Link>
      </div>
    </DefaultLayout>
     
  );
}
