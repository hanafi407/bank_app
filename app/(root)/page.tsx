import HeaderBox from '@/components/HeaderBox'
import Misal from '@/components/Misal'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn={firstName: "Hanafi", lastName:"Aji",email:"hanafi@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            title='Welcome'
            subtext='Access and manage your account and transactions eficiently'
            type='greeting'
            user={loggedIn?.firstName || "Guest"}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1231.45}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.55 }, { currentBalance: 500.55 }]}
      />
    </section>
  );
}

export default Home