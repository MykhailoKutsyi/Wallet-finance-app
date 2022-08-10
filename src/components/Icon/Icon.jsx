import sprite from 'assets/images/sprite.svg';

const Icon = ({ id, width, height, color }) => {
  return (
    <svg width={width} height={height}>
      <use href={sprite + id} width={width} height={height} fill={color} />
    </svg>
  );
};

export default Icon;
