import Discover from '@/components/profile/Discover'
import ExploreArt from '@/components/profile/ExploreArt'
import PopularCategories from '@/components/profile/PopularCategories'
import ProfileHeader from '@/components/profile/ProfileHeader'
import Spotlight from '@/components/profile/Spotlight'
import WorksBy from '@/components/profile/WorksBy'
import React from 'react'

const page = () => {
  return (
    <>
        <ProfileHeader />
        <ExploreArt />
        <Spotlight />
        <PopularCategories />
        <WorksBy />
        <Discover />

    </>
  )
}

export default page
