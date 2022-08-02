import sprite from '../../images/sprite.svg';
const Icon = ({ id, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={sprite + id} width={width} height={height} />
    </svg>
  );
};

export default Icon;
