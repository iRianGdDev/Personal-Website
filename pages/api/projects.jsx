export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://ugc.production.linktr.ee/6RJk9s2pQZ2yAdcxw3Ir_TXX2dLlNmwM2OFdf?io=true&size=avatar-v3_0",
      name: "Social Accounts",
      description: "Hello, I am Efe, I am 19 years old, I am a designer, editor, beat maker, writer, animator and software developer.",
      link: "https://linktr.ee/umutxyp",
    }
  ];
  res.status(200).json(data);
};
 ]

