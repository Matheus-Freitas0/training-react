
function MemberContainer() {
    return (
        <>
        <header>
            <nav class="navbar">
                <div class="container-fluid">
                    <p class="nav fst-italic fs-3">Project Manager</p>
                </div>
            </nav>
        </header>
        <main>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>The project was registered!</strong> Deu certo lalala.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            <div id="alert-container"></div>
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-12 mb-5">
                        <div class="d-flex inline mb-2">
                            <h2 class="col">Projects</h2>
                            <a class="btn-new-proj btn btn-primary btn-lg"
                                href="/register_edit/index.html">
                                New project</a>
                                <a href=""></a>
                        </div>
                        <table
                            class="table table-striped table-hover table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Manager in charge</th>
                                    <th scope="col"
                                        class="d-none d-sm-table-cell">Classification</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="project-list" class="lists">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
        </>
                
    )
    
}

export default MemberContainer