import { useParams } from "next/navigation";
import { use, useMemo } from "react";

const useConveration = () => {
  const params = useParams();
  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return "";
    }
    return params.conversationId as string;
  }, [params?.conversationId]);
  const isOpen = useMemo(() => !!conversationId, [conversationId]);
  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [conversationId, isOpen],
  );
};
export default useConveration;
