import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useQueryParameter = (paramName) => {
    const location = useLocation();

    return new URLSearchParams(location.search).get(paramName);
}

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return ({ key, value }) => {
        value ?
            searchParams.set(key, value)
            :
            searchParams.delete(key);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};