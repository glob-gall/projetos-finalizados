import OrderList, { OrderListProps } from 'components/OrderList'
import {
  QueryOrders,
  QueryOrdersVariables
} from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'
import { ordersMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function ProfileCards({ items }: OrderListProps) {
  return (
    <Profile>
      <OrderList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloCLient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloCLient.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.id as string
    },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}
