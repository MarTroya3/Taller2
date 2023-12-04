import DefaultLayout from "@/layouts/default";
export default function servicios () {
  return (
    <DefaultLayout>
        <div className="flex flex-col items-center space-y-8 mt-8">
        <h1 className="text-4xl font-bold text-center">
          ¡Bienvenido a Grupo Acosta!
        </h1>
        <p className="text-lg text-center">
       La empresa ofrece servicios como:
              </p>
        <p className="text-lg text-left">
       Auditorías ambientales
</p>
<p className="text-lg text-left">
    Entrega de Informes de cumplimiento
</p>
<p className="text-lg text-left">
        Informes de Gestión Anual
</p>
</div>
        
    </DefaultLayout>
  )
}