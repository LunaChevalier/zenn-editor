import { Chapter } from "@types";
import { getChapterErrors } from "@utils/validator";
import { ContentWrapper } from "@components/ContentWrapper";
import { ErrorRow } from "@components/ErrorRow";

type Props = { chapter: Chapter };

export const ChapterHeader: React.FC<Props> = ({ chapter }) => {
  const errorMessages = getChapterErrors(chapter);
  const errorCount = errorMessages?.length;
  return (
    <header className="content-header">
      <ContentWrapper>
        <div style={{ fontSize: "14px" }}>Chapter {chapter.position}</div>

        <h1 className="content-header__title">{chapter.title || "No Title"}</h1>

        {!!errorCount && (
          <div>
            <div className="content-header__error-title">
              {errorCount}件の修正が必要です
            </div>
            {errorMessages.map((errorMessage, index) => (
              <ErrorRow errorMessage={errorMessage} key={`invldmsg${index}`} />
            ))}
          </div>
        )}

        <a
          href=" https://zenn.dev/zenn/articles/zenn-cli-guide#cliで本（book）を管理する"
          className="content-header__link"
          target="_blank"
        >
          Chapterのmdファイルの作成方法 →
        </a>
      </ContentWrapper>
    </header>
  );
};
