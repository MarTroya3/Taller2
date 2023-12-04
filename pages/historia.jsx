import DefaultLayout from "@/layouts/default";
export default function historia () {
  return (
    <DefaultLayout>
        <div className="flex flex-col items-center space-y-8 mt-8">
        <h1 className="text-4xl font-bold text-center">
          ¡Bienvenido a Grupo Acosta!
        </h1>
        <p className="text-lg text-center">
        Misión: Facilitar a nuestros clientes la implementación de sistemas de gestión ambiental, 
gestión de la calidad y gestión de la salud ocupacional, garantizando la aplicación de 
estándares que les catapulten como empresas sostenibles, en concordancia con los objetivos 
trazados en la Agenda 2030. Estas prácticas, complementadas con una adecuada gestión del conocimiento, 
conducirán a nuestros clientes a contribuir con los 17 Objetivos de Desarrollo Sostenible (ODS) y con los compromisos que el país se ha fijado de cara hacia una economía sostenible, justa y responsable.
        </p>
        <p className="text-lg text-center">
        Visión: “A MEDIANO PLAZO (dos años o más) 
Aumentar la cobertura de nuestros servicios en: Pichincha, Guayas, Tungurahua y Manabí, aprovechando la experiencia y recursos en esas provincias, conseguidas en los últimos 15 años. 
A LARGO PLAZO (cinco años) 
Ser reconocidos a nivel nacional como un grupo sólido de empresas y el de mayor prestigio, con profesionales altamente capacitados, para brindar las mejores soluciones integrales de gestión ambiental,
economía circular, producción más limpia y carbono neutro, al sector público y privado.
</p>
</div>
    </DefaultLayout>
  )
}