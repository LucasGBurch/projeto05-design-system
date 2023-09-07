import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
        {/* Criando um array com size posições. O (_, i) é uma função que podemos passar, sendo que _ representa o conteúdo do Array, que começa vazio. O i é o índice. Como começa em 0, se o length for 3, então os elementos serão (0+1, 1+1, 2+1), ou seja [1, 2, 3] */}
      </Steps>
    </MultiStepContainer>
  )
}
