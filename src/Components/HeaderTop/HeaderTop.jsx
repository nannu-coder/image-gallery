const HeaderTop = () => {
  return (
    <div className="p-4">
      <div className="count-file">
        <div className="flex justify-between items-center">
          {/* Checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer ">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox checkbox-primary mr-2"
              />
              <span className="label-text">3 Files Selected</span>
            </label>
          </div>
          {/* Checkbox end */}
          <div className="right">
            <button className="text-red-500">Delete files</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
