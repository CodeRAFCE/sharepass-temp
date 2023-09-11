
const KnowledgeBase = () => {
    return (
        <div class="knowledgebase-page">
            <div class="knowledgebase-column knowledgebase-index">
                <div class="knowledgebase-sidebar">
                    <ul class="knowledgebase-menu">
                        <li><a href="#">Menu Item 1</a></li>
                        <li>
                        <a href="#">Menu Item 2</a>
                        <ul class="knowledgebase-submenu">
                            <li><a href="#">Submenu 2.1</a></li>
                            <li><a href="#">Submenu 2.2</a></li>
                            <li>
                            <a href="#">Submenu 2.3</a>
                            <ul class="knowledgebase-submenu">
                                <li><a href="#">Submenu 2.3.1</a></li>
                                <li><a href="#">Submenu 2.3.2</a></li>
                                <li><a href="#">Submenu 2.3.3</a></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li>
                            <a href="#">Menu Item 3</a>
                            <ul class="knowledgebase-submenu">
                                <li><a href="#">Submenu 3.1</a></li>
                                <li><a href="#">Submenu 3.2</a></li>
                                <li>
                                <a href="#">Submenu 3.3</a>
                                <ul class="knowledgebase-submenu">
                                    <li><a href="#">Submenu 3.3.1</a></li>
                                    <li><a href="#">Submenu 3.3.2</a></li>
                                    <li><a href="#">Submenu 3.3.3</a></li>
                                </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="knowledgebase-column knowledgebase-content">Column 2 (7 units)</div>
            <div class="knowledgebase-column knowledgebase-subindex">Column 3 (2 units)</div>
        </div>
    );
}

export default KnowledgeBase;