import { LivroUnitProps } from 'types/api'

export default function LivroTemplate({ livro }: LivroUnitProps) {
  return (
    <div>
      <p>{livro.titulo}</p>
    </div>
  )
}
