import { Flex } from '@chakra-ui/react'
import { Header, Sidebar } from '../../components'
import { withSSRAuth } from '../../utils/withSSRAuth'

export default function Users() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1488} mx="auto" px="6">
        <Sidebar />
        {/* Content */}
      </Flex>
    </Flex>
  )
}

export const getServerSideProps = withSSRAuth(async context => {
  return {
    props: {},
  }
})
