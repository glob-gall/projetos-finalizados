import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function PageNotFound() {
  return (
    <Base>
      <Empty
        title="404: Not found"
        description="this page does not exist. Come back to home."
        hasLink
      />
    </Base>
  )
}
