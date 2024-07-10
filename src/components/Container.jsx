// HOC (Higher Order Components)
// Farklı componentları prop olarak alan componentlar
// Classı aynı olan yapıyı birden fazla kullanmak yerine hoc  ile tek seferde tanımladık ve diğer dosyalarda kapsayıcılarına Container component i verdik

const Container = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto p-5">{children}</div>;
};

export default Container;
