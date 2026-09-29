import{f as g,r as i,k as v,c as y,b as e,g as d,u as f,o as m,i as b}from"./CPldXrOl.js";import{c as A}from"./DjoAjV_K.js";import h from"./D4NnPmdQ.js";import{_ as w}from"./Bsc92joQ.js";import I from"./CcvlJgkW.js";import L from"./ScP37bAP.js";import S from"./Did5zjZH.js";import{_ as k}from"./BDGmo280.js";import T from"./BKfvsay3.js";import{_ as x}from"./wtVSKkED.js";import G from"./Ar7Goq6u.js";import{u as M}from"./DNyll1FF.js";import"./CZI19QHl.js";import"./BNn9SHCa.js";import"./ClMDkOOe.js";import"./DZ-jJs9D.js";import"./DM2Dl8d0.js";import"./DAxGFW-G.js";const B={class:""},P=`
{
  "heroPost": *[_type in ["article", "interview", "resource", "story"] && featured == true] | order(publishAt desc)[0]{
    ...,
    "slug": slug.current,
    coverImg{
      asset->
    }
  },
  "latestPost": *[_type in ["article", "interview", "resource", "story"] && latest == true] | order(publishAt desc)[0]{
    ...,
    "slug": slug.current,
    coverImg{
      asset->
    }
  },
  "stories": *[_type == "story"] | order(date desc){
    ...,
    image{
      asset->
    }
  },
  "storyGridPosts": [
    ...*[_type == "article"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    },
    ...*[_type == "interview"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    },
    ...*[_type == "resource"] | order(publishAt desc)[0...2]{
        ...,
        "slug": slug.current,
        coverImg{ asset->, alt }
    }
  ] | order(publishAt desc)[0...5],
  "latestBlogs": *[_type == "story" && "investor" in type] | order(date desc)[0...5]{
    ...,
    "slug": slug.current,
    image{
      asset->,
      alt
    }
  },
  "settings": *[_type == "investorPageSettings"][0]{
    teamGridLayout,
    tractionGridLayout,
    roadmapLimit,
    teamSectionTitle,
    roadmapSectionTitle,
    faqSectionTitle,
    showFAQs,
    heroVideo,
    heroVideoFile
  },
  "teamMembers": *[_type == "teamMember" && isActive == true] | order(order asc){
    _id,
    name,
    role,
    bio,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
    linkedIn,
    twitter,
    order,
    isActive
  },
  "roadmapItems": *[_type == "roadmapItem" && isActive == true] | order(order asc){
    _id,
    period,
    heading,
    description,
    image1{
      asset->{
        _id,
        url
      },
      alt
    },
    image2{
      asset->{
        _id,
        url
      },
      alt
    },
    milestones[]{
      title,
      completed
    },
    order,
    isActive
  }
}
`,Y=g({__name:"index",async setup(R){let o,u;M({title:"About -",meta:[{name:"description",content:"About RiseOS, the operating system for the future."},{property:"og:title",content:"RiseOS - About"},{property:"og:description",content:"About RiseOS, the operating system for the future."}]});const{width:p}=b(),l=i([]),r=i([]),s=i([]),t=i(null),a=([o,u]=v(()=>A.fetch(P)),o=await o,u(),o);if(l.value=a.stories,r.value=a.teamMembers,s.value=a.roadmapItems,t.value=a.settings,t.value?.roadmapLimit&&s.value&&(s.value=s.value.slice(0,t.value.roadmapLimit)),t.value?.teamGridLayout&&r.value){const[c,n]=t.value.teamGridLayout.split("x").map(Number),_=c*n;r.value=r.value.slice(0,_)}return(c,n)=>(m(),y("main",B,[e(L),f(p)>=1024?(m(),d(T,{key:0})):(m(),d(G,{key:1})),e(x),e(S,{"team-members":r.value,"grid-layout":t.value?.teamGridLayout},null,8,["team-members","grid-layout"]),e(h,{stories:l.value},null,8,["stories"]),e(k,{"roadmap-items":s.value},null,8,["roadmap-items"]),e(I),e(w)]))}});export{Y as default};
