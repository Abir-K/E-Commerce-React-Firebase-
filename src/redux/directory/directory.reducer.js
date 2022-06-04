const INITIAL_STATE = {
  sections: [
    {
      title: "glasses",
      imageUrl:
        "https://i.ibb.co/7J2LHL2/glasses.jpg",
      id: 1,
      linkUrl: "shop/glasses",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/cCchbjG/jackets.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/pvjkMfb/sneakers.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://i.ibb.co/ysRQd2D/womens.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://i.ibb.co/YB6dWWN/mens.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
