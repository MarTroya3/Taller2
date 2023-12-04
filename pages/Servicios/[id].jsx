import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";

const ServicioDetail = () => {

  const router = useRouter();
  const { id } = router.query;
  
  return (
    <DefaultLayout>
        servicio {id}
    </DefaultLayout>
  )
}

export default ServicioDetail