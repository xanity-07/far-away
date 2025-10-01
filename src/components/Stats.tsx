import type { Items } from '../types';

type Props = {
  items: Items[];
};

const Stats = ({ items }: Props) => {
  if (!items.length) {
    return (
      <span className='stats'>
        <em>Start Adding Items To Your List! 🫡</em>
      </span>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;

  const percentagePackedItems = numItems
    ? Math.trunc((packedItems / numItems) * 100)
    : 0;

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
