import { Fragment, useRef, useState } from "react";
import useResizeUploadPng from "./useResizeUploadPng";
import { useDispatch } from "react-redux";
import {
  changePropsTextHandle,
  deleteTextCustomHandle,
} from "../../../../../../../store/global/globalSlice";
import _ from "lodash";
import trashImg from "../../../../../../../img/xDelete.png";

function TextOnShirt({ allowRangeRef, isPrecedence, setIsPrecedence, data }) {
  //
  const textCustom = _.cloneDeep(data);
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(isPrecedence + 1);
  const targetRef = useRef();
  const flexCenterXy = "absolute flex items-center justify-center";
  const borderDash = "border-white border-dashed border-[1px]";
  const isBorderDashCl = data.focus ? `${borderDash}` : "!overflow-hidden";
  const isHidden = data.focus ? "inline-block" : "hidden";
  useResizeUploadPng({ targetRef, allowRangeRef });

  return (
    <Fragment>
      <div
        id={data.id}
        tabIndex="0"
        ref={targetRef}
        className={`absolute ${flexCenterXy} outline-none`}
        onFocus={() => {
          setIsFocus(isPrecedence + 1);
          setIsPrecedence(state => state + 1);
          textCustom.focus = true;
          dispatch(changePropsTextHandle(textCustom));
        }}
        onBlur={() => {
          textCustom.focus = !textCustom.focus;
          dispatch(changePropsTextHandle(textCustom));
        }}
        style={{
          zIndex: isFocus,
          width: data.width,
          height: data.height,
        }}
      >
        <img
          className={`${isHidden} absolute w-5 h-5 p-1 top-[-8px] right-[-8px] z-10 rounded-full bg-white active`}
          src={trashImg}
          alt="delete"
          onClick={e => {
            setTimeout(() => {
              dispatch(deleteTextCustomHandle(textCustom.id));
            }, 100);
          }}
        />
        <textarea
          // id={data.id}
          className={`absolute w-[100%] h-[100%] ${isBorderDashCl} bg-transparent text-white pt-3 scrollBar outline-none resize-none`}
          placeholder="Hãy viết lên"
          spellCheck="false"
          style={{
            fontFamily: data.fontFamily,
            fontWeight: data.fontWeight,
            fontSize: `${data.fontSize}px`,
            color: data.color,
            letterSpacing: `${data.spacing}px`,
            lineHeight: data.lineHeight,
            textAlign: data.textAlign,
          }}
          onChange={e => {
            textCustom.value = e.target.value;
            dispatch(changePropsTextHandle(textCustom));
          }}
        />
      </div>
    </Fragment>
  );
}

export default TextOnShirt;
