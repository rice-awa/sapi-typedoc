import { world, DimensionLocation } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

function showBasicModalForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const modalForm = new ModalFormData().title("Example Modal Controls for §o§7ModalFormData§r");

  modalForm.toggle("Toggle w/o default");
  modalForm.toggle("Toggle w/ default", true);

  modalForm.slider("Slider w/o default", 0, 50, 5);
  modalForm.slider("Slider w/ default", 0, 50, 5, 30);

  modalForm.dropdown("Dropdown w/o default", ["option 1", "option 2", "option 3"]);
  modalForm.dropdown("Dropdown w/ default", ["option 1", "option 2", "option 3"], 2);

  modalForm.textField("Input w/o default", "type text here");
  modalForm.textField("Input w/ default", "type text here", "this is default");

  modalForm
    .show(players[0])
    .then((formData) => {
      players[0].sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
