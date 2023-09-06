# Copyright (c) 2023, test-app and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class Test(Document):
	# pass
	@frappe.whitelist()
    def get_doc(self, throw_if_missing=False):
        doc=self.name1

        return doc
