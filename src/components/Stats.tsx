import type { Items } from '../types';

type Props = {
  items: Items[];
};

const Stats = ({ items }: Props) => {
  const numItems = items.length;
  const packedItems = items
    .map((item) => item)
    .filter((item) => item.packed === true);

  const percentagePackedItems = Math.trunc(
    (packedItems.length / numItems) * 100
  );

  const isFullyPacked = percentagePackedItems === 100;

  return (
    <footer className='stats'>
      {isFullyPacked ? (
        <span>You have packed all your items!!! 👍</span>
      ) : (
        <span>
          You have {numItems} items on your list, and you have already packed{' '}
          {percentagePackedItems}% of your way there !
        </span>
      )}
    </footer>
  );
};
export default Stats;
