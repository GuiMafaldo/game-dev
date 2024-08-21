import Image from "next/image"

const InitialPage = () => {
    return(
      <div>
          <Image 
              src="/image/telaInicial.png"
              alt="game page"
              width={960}
              height={600}
          />
      </div>
    )

}

export default InitialPage