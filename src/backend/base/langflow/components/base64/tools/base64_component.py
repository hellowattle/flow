import base64
from pathlib import Path

from langflow.custom import Component
from langflow.helpers.data import data_to_base64, data_to_base64_list
from langflow.io import DataInput, Output
from langflow.schema import Data, Message


def parse_file_to_base64(file_path: str, mimetype: str) -> str:
    with Path.open(file_path, "rb") as f:
        return f"data:{mimetype};base64,{base64.b64encode(f.read()).decode('utf-8')}"


class DataToBase64(Component):
    display_name = "Base64 Component"
    description = "Converts an input file to a Base64 string"
    icon = "custom_components"
    name = "Base64Component"

    inputs = [
        DataInput(name="data", display_name="Data", info="The data to convert to base64", is_list=True, required=True),
    ]

    outputs = [
        Output(
            display_name="Base64 String",
            name="text",
            info="The input data as a series of base64 string messages",
            method="parse_data",
        ),
    ]

    def _clean_args(self) -> tuple[list[Data], str, str]:
        data = self.data if isinstance(self.data, list) else [self.data]
        template = self.template
        sep = self.sep
        return data, template, sep

    def parse_data(self) -> Message:
        data, template, sep = self._clean_args()
        result_string = data_to_base64(template, data, sep)
        self.status = result_string
        return Message(text=result_string)

    def parse_data_as_list(self) -> list[Data]:
        data, template, _ = self._clean_args()
        text_list, data_list = data_to_base64_list(template, data)
        for item, text in zip(data_list, text_list, strict=True):
            item.set_text(text)
        self.status = data_list
        return data_list
