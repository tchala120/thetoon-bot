import { useLocation } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import styled from '@emotion/styled'

import BottomTabBar from 'components/BottomTabBar'

import { getAppTitleFromPathname } from 'helpers/utils'

import { AppBarContainer, AppBodyContainer, AppLayoutContainer } from './utils'

import type { LayoutProps } from './types'

const AppTabLayout = ({ appBarActionMenus, children }: LayoutProps) => {
  const { pathname } = useLocation()

  return (
    <AppLayoutContainer>
      <AppBarContainer>
        <NavBar backArrow={false} right={appBarActionMenus}>
          {getAppTitleFromPathname(pathname)}
        </NavBar>
      </AppBarContainer>

      <AppBodyContainer>{children}</AppBodyContainer>

      <AppBottomContainer>
        <BottomTabBar />
      </AppBottomContainer>
    </AppLayoutContainer>
  )
}

export default AppTabLayout

const AppBottomContainer = styled.div`
  position: sticky;
  bottom: 0;
  flex: 0;
  background: #fff;
  border-top: solid 1px var(--adm-color-border);
`
