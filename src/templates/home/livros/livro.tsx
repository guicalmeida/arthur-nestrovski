import { LivroUnitProps } from 'types/api'

export default function Livro({ livro }: LivroUnitProps) {
  return (
    <div>
      <p>{livro.titulo}</p>
    </div>
  )
}
