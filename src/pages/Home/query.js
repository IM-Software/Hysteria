export const HOME_QUERY = `
{
  headerImg{
    logoPc{
      url
    },
    logoMobile{
      url
    }
  },
  initial{
    videoUrl,
    textUp,
    textMiddle,
    textLow
  },
  about {
    text,
    titleSecondary,
    title,
    conspiracaoLink
  },
  allBrands {
    name,
    logo{
      url
    }
  },
  transitionOne {
    img{
      url
    },
    logo{
      url
    }
  },
  transitionTwo {
    img{
      url
    },
    logo{
      url
    }
  },
  allProjects {
    name,
    typeProject,
    stream,
    width,
    height,
    gridPosition,
    prevVideo,
    imageMain {
      url
    },
    text,
    createdby,
    realization,
    support,
    direction,
    videourl,
    videoThumb {
      url
    },
    image1 {
      url
    },
    image2 {
      url
    },
    imageMiddle {
      url
    },
    image3 {
      url
    },
    image4 {
      url
    }
  },
  brandlab{
    text,
    textSecondary,
    videoUrl
  },
  collaborator{
    text,
    imageTop{
      url
    },
    imageLeft{
      url
    },
    imageRight{
      url
    },
    imageLow{
      url
    }
  }
  contact{
  	email,
    youtubeLink,
    instagramLink
  }
}`