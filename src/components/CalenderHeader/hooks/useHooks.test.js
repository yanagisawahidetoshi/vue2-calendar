import { useHooks } from "./useHooks";

describe("useHooks", () => {
  const mockEmit = jest.fn();
  const props = {
    year: 2024,
    month: 11,
  };

  let hooks;

  beforeEach(() => {
    mockEmit.mockClear();
    hooks = useHooks(props, mockEmit);
  });

  it("computed title should return formatted string", () => {
    expect(hooks.title.value).toBe("2024年11月");
  });

  it("emitClickPrevMonth should call emit with 'onClickPrevMonth'", () => {
    hooks.emitClickPrevMonth();
    expect(mockEmit).toHaveBeenCalledWith("onClickPrevMonth");
  });

  it("emitClickNextMonth should call emit with 'onClickNextMonth'", () => {
    hooks.emitClickNextMonth();
    expect(mockEmit).toHaveBeenCalledWith("onClickNextMonth");
  });

  it("emitRegisterSchedule should call emit with 'registerSchedule' and event", () => {
    const event = { someKey: "someValue" };
    hooks.emitRegisterSchedule(event);
    expect(mockEmit).toHaveBeenCalledWith("registerSchedule", event);
  });
});
