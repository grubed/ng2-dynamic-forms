import {
    DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER,
    DynamicDatepickerModel
} from "./dynamic-datepicker.model";

describe("DynamicDatepickerModel test suite", () => {

    let model: DynamicDatepickerModel,
        config = {
            id: "datepicker",
            value: new Date()
        };

    beforeEach(() => model = new DynamicDatepickerModel(config));

    it("should initialize correctly", () => {

        expect(model.disabled).toBe(false);
        expect(model.focusedDate).toBeNull();
        expect(model.id).toEqual(config.id);
        expect(model.label).toBeNull();
        expect(model.format).toBeNull();
        expect(model.max).toBeNull();
        expect(model.min).toBeNull();
        expect(model.name).toEqual(model.id);
        expect(model.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER);
        expect(model.value).toBe(config.value);
    });

    it("should serialize correctly", () => {

        let json = JSON.parse(JSON.stringify(model));

        expect(json.id).toEqual(model.id);
        expect(json.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER);
        expect(json.value).toBe((model.value as Date).toJSON());
    });
});