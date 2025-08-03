import { Input } from '@/components/ui/input';
import { useKeywords } from '@/hooks/use-automations';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/use-queries';
import { X } from 'lucide-react';
import React from 'react';

type Props = {
  id: string;
};

const Keywords = ({ id }: Props) => {
  const { keyword, onValueChange, onKeyPress, deleteMutation } = useKeywords(id);
  const { latestVariable } = useMutationDataState(['add-keyword']);
  const { data } = useQueryAutomation(id);

  return (
    <div className="flex flex-col gap-y-3 rounded-xl bg-background-88 p-3">
      <p className="text-sm text-text-secondary">Add words that trigger automations</p>
      <div className="flex flex-wrap items-center justify-start gap-2">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) =>
              word !== latestVariable.variables.id && (
                <div
                  key={word.id}
                  className="flex items-center gap-x-2 rounded-full bg-background-99 px-4 py-1 capitalize text-text-secondary"
                >
                  <p>{word.word}</p>
                  <X size={20} onClick={() => deleteMutation({ id: word.id })}></X>
                </div>
              )
          )}

        {latestVariable && latestVariable.status === 'pending' && (
          <div className="flex items-center gap-x-2 rounded-full bg-background-99 px-4 py-1 capitalize text-text-secondary">
            {latestVariable.variables.keyword}
          </div>
        )}

        <Input
          placeholder="Add keyword..."
          value={keyword}
          className="border-none bg-transparent p-0 outline-none ring-0"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keywords;
