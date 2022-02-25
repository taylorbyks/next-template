import { Stack } from '@chakra-ui/react'
import {
  RiDashboardLine,
  RiFileTextLine,
  RiCalendarCheckFill,
} from 'react-icons/ri'
import { NavLink } from '../NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="8" align="flex-start">
      <NavSection title="SUBMENU">
        <NavLink icon={RiFileTextLine} href="/item1">
          Item 1
        </NavLink>
        <NavLink icon={RiCalendarCheckFill} href="/item2">
          Item 2
        </NavLink>
      </NavSection>
      <NavSection title="SUBMENU 2">
        <NavLink icon={RiDashboardLine} href="/item3">
          Item 3
        </NavLink>
      </NavSection>
    </Stack>
  )
}
