interface CharCountProps {
  count: number;
  maxLength: number;
}

const CharCount = ({ count, maxLength }: CharCountProps) => {
  return (
    <span className="text-muted-foreground text-xs tabular-nums">
      {count}/{maxLength}
    </span>
  );
};

export default CharCount;
