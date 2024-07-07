const getColors = (index: number) => {
  const colors = [
    "bg-pink-800",
    "bg-teal-800",
    "bg-purple-800",
    "bg-green-800",
    "bg-blue-800",
    "bg-orange-800",
    "bg-yellow-800",
    "bg-red-800",
    "bg-gray-800",
    "bg-indigo-800",
  ];
  return colors[index % colors.length];
};

export { getColors };
