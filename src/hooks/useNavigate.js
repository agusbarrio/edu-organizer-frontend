import { useCallback, useMemo } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

function useNavigate() {
  const router = useRouter();
  const pathParams = useParams() ?? {};
  const searchParams = useSearchParams();

  const params = useMemo(() => {
    const q = {};
    searchParams?.forEach((value, key) => {
      q[key] = value;
    });
    return { ...q, ...pathParams };
  }, [pathParams, searchParams]);

  const go = useCallback(
    (url, as) => {
      const href = as != null && as !== "" ? as : url;
      if (typeof href === "string") {
        router.push(href);
      }
    },
    [router]
  );

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return { go, params, goBack };
}

export default useNavigate;
