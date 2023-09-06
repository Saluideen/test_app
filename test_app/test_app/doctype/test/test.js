// Copyright (c) 2023, test-app and contributors
// For license information, please see license.txt

frappe.ui.form.on('Test', {
	refresh: function(frm) {

	},
	name1:function(frm){
		frm.call('get_doc', { throw_if_missing: true })
    .then(r => {
        if (r.message) {
           frappe.throw(r.message[0].name1)
            // do something with linked_doc
        }
    })

	}
});
