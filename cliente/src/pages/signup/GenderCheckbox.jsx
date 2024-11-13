function GenderCheckbox() {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300 ">Hombre</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-accent"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-300">Mujer</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 checkbox-secondary"
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
