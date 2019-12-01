    var Ziggy = {
        namedRoutes: {"ajax.callbacks.index":{"uri":"ajax\/callbacks","methods":["GET","HEAD"],"domain":null},"component.schedules.create":{"uri":"component\/schedules","methods":["GET","HEAD"],"domain":null},"component.schedules.store":{"uri":"component\/schedules","methods":["POST"],"domain":null},"component.schedules.edit":{"uri":"component\/schedules\/{component_schedule}","methods":["GET","HEAD"],"domain":null},"component.schedules.update":{"uri":"component\/schedules\/{component_schedule}","methods":["PATCH"],"domain":null},"component.visitor-logins.create":{"uri":"component\/visitor-logins","methods":["GET","HEAD"],"domain":null},"component.visitor-logins.store":{"uri":"component\/visitor-logins","methods":["POST"],"domain":null},"component.visitor-logins.edit":{"uri":"component\/visitor-logins\/{component_visitor_login}","methods":["GET","HEAD"],"domain":null},"component.visitor-logins.update":{"uri":"component\/visitor-logins\/{component_visitor_login}","methods":["PATCH"],"domain":null},"api.guests.index":{"uri":"api\/guests","methods":["GET","HEAD"],"domain":null},"api.guests.create":{"uri":"api\/guests\/create","methods":["GET","HEAD"],"domain":null},"api.guests.store":{"uri":"api\/guests","methods":["POST"],"domain":null},"api.guests.show":{"uri":"api\/guests\/{guest}","methods":["GET","HEAD"],"domain":null},"api.guests.edit":{"uri":"api\/guests\/{guest}\/edit","methods":["GET","HEAD"],"domain":null},"api.guests.update":{"uri":"api\/guests\/{guest}","methods":["PUT","PATCH"],"domain":null},"api.guests.destroy":{"uri":"api\/guests\/{guest}","methods":["DELETE"],"domain":null},"ajax.schedules.show":{"uri":"ajax\/schedules\/{schedule}","methods":["GET","HEAD"],"domain":null},"ajax.guests.scan_tickets.index":{"uri":"ajax\/guests\/scan_tickets","methods":["POST"],"domain":null},"component.votings.create":{"uri":"component\/votings","methods":["GET","HEAD"],"domain":null},"component.votings.store":{"uri":"component\/votings","methods":["POST"],"domain":null},"component.votings.edit":{"uri":"component\/votings\/{component_voting}","methods":["GET","HEAD"],"domain":null},"component.votings.update":{"uri":"component\/votings\/{component_voting}","methods":["PATCH"],"domain":null},"component.entries.create":{"uri":"component\/entries","methods":["GET","HEAD"],"domain":null},"component.entries.store":{"uri":"component\/entries","methods":["POST"],"domain":null},"component.entries.edit":{"uri":"component\/entries\/{component_entry}","methods":["GET","HEAD"],"domain":null},"component.entries.update":{"uri":"component\/entries\/{component_entry}","methods":["PATCH"],"domain":null},"component.entry-screenshots.create":{"uri":"component\/entry-screenshots","methods":["GET","HEAD"],"domain":null},"component.entry-screenshots.store":{"uri":"component\/entry-screenshots","methods":["POST"],"domain":null},"component.entry-screenshots.edit":{"uri":"component\/entry-screenshots\/{component_entry_screenshot}","methods":["GET","HEAD"],"domain":null},"component.entry-screenshots.update":{"uri":"component\/entry-screenshots\/{component_entry_screenshot}","methods":["PATCH"],"domain":null},"component.entry-uploads.create":{"uri":"component\/entry-uploads","methods":["GET","HEAD"],"domain":null},"component.entry-uploads.store":{"uri":"component\/entry-uploads","methods":["POST"],"domain":null},"component.entry-uploads.edit":{"uri":"component\/entry-uploads\/{component_entry_upload}","methods":["GET","HEAD"],"domain":null},"component.entry-uploads.update":{"uri":"component\/entry-uploads\/{component_entry_upload}","methods":["PATCH"],"domain":null},"ajax.access_keys.generate":{"uri":"ajax\/access_keys\/generate","methods":["POST"],"domain":null},"ajax.votes.submit":{"uri":"ajax\/votes\/{api_token}\/submit","methods":["POST"],"domain":null},"ajax.slidemeister-web.status.update":{"uri":"ajax\/slidemeister-web\/{slide_client}\/status","methods":["POST"],"domain":null},"ajax.transitions.index":{"uri":"ajax\/transitions","methods":["GET","HEAD"],"domain":null},"ajax.playlists.index":{"uri":"ajax\/playlists","methods":["GET","HEAD"],"domain":null},"ajax.playlists.items.show":{"uri":"ajax\/playlists\/items\/{playlist_item}","methods":["GET","HEAD"],"domain":null},"ajax.slide_templates.preview":{"uri":"ajax\/slide_templates","methods":["POST"],"domain":null},"ajax.slides.index":{"uri":"ajax\/slides","methods":["GET","HEAD"],"domain":null},"ajax.slide_clients.communication.playlist":{"uri":"ajax\/slide_clients\/communication\/playlist","methods":["POST"],"domain":null},"ajax.slide_clients.communication.playnow":{"uri":"ajax\/slide_clients\/communication\/playnow","methods":["POST"],"domain":null},"ajax.slide_clients.communication.seek":{"uri":"ajax\/slide_clients\/communication\/seek","methods":["POST"],"domain":null},"ajax.slide_clients.communication.skip":{"uri":"ajax\/slide_clients\/communication\/skip","methods":["POST"],"domain":null},"ajax.slide_clients.communication.system":{"uri":"ajax\/slide_clients\/communication\/system","methods":["GET","HEAD"],"domain":null},"ajax.slide_clients.communication.playlists":{"uri":"ajax\/slide_clients\/communication\/playlists","methods":["GET","HEAD"],"domain":null},"ajax.categories.index":{"uri":"ajax\/categories","methods":["GET","HEAD"],"domain":null},"ajax.files.index":{"uri":"ajax\/files","methods":["GET","HEAD"],"domain":null},"backend.pages.components.delete":{"uri":"backend\/pages\/{page}\/components\/{page_version_component}","methods":["DELETE"],"domain":null},"backend.pages.component_data.read":{"uri":"backend\/pages\/{page}\/component_data","methods":["GET","HEAD"],"domain":null},"backend.pages.component_data.update":{"uri":"backend\/pages\/{page}\/component_data","methods":["PATCH"],"domain":null},"component.texts.create":{"uri":"component\/texts","methods":["GET","HEAD"],"domain":null},"component.texts.store":{"uri":"component\/texts","methods":["POST"],"domain":null},"component.texts.edit":{"uri":"component\/texts\/{component_text}","methods":["GET","HEAD"],"domain":null},"component.texts.update":{"uri":"component\/texts\/{component_text}","methods":["PATCH"],"domain":null},"component.base.store":{"uri":"component\/base","methods":["POST"],"domain":null},"component.base.destroy":{"uri":"component\/base\/{base}","methods":["DELETE"],"domain":null}},
        baseUrl: '/',
        baseProtocol: 'http',
        baseDomain: 'partymeister.test',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
